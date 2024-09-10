import { usePathname } from "next/navigation";

export function menus(t: any): {
	label: string,
	link: string
}[] {
	const pathname = usePathname();

	const currentCode = pathname.split("/")[1] || "en"; // Default to 'en' if pathname is '/'

	return [
		{
			label: t("about"),
			link: `/${currentCode}/about/`,
		},
		{
			label: t("publications"),
			link: `/${currentCode}/publications/`,
		},
		{
			label: t("partners"),
			link: `/${currentCode}/partners/`,
		},
		{
			label: t("contact"),
			link: `/${currentCode}/contact/`,
		},
	]
};
