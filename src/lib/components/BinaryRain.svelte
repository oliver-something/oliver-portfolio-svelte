<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const context = canvas.getContext('2d');
    let animationFrame;
    let width = 0;
    let height = 0;
    let fontSize = 18;
    let columns = 0;
    let drops = [];

    const characters = ['0', '1'];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);

      fontSize = width < 640 ? 14 : 25;
      columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -height);
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
    };

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < drops.length; index += 1) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        const y = drops[index] * fontSize;
        const opacity = 0.35 + Math.random() * 0.65;
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(char, x, y);

        const resetChance = Math.random();
        if (y > height && resetChance > 0.975) {
          drops[index] = Math.random() * -20;
        }

        drops[index] += 0.58;
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas} class="fixed inset-0 z-10 opacity-25"></canvas>
