import {GithubLogoIcon, LinkedinLogoIcon, MailboxIcon} from "phosphor-svelte";

export const contactInfoCardItems = [
    {
        title: 'Email Address',
        address: "diablo31@live.co.uk",
        icon: MailboxIcon,
        url: "mailto:diablo31@live.co.uk"
    },
    {
        title: 'LinkedIn',
        address: "https://linkedin.com/in/myaddress",
        icon: LinkedinLogoIcon,
        url: "https://linkedin.com/in/myaddress"
    },
    {
        title: 'GitHub',
        address: "https://github.com/myaddress",
        icon: GithubLogoIcon,
        url: "https://github.com/myaddress"
    }
];