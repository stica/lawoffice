import { usePathname } from "next/navigation";

export function menus(t: any): {
	label: string,
	link: string
}[] {
	const pathname = usePathname();

	const currentCode = pathname.split("/")[1] || "en"; // Default to 'en' if pathname is '/'

	return [
		{
			label: t("home"),
			link: `/${currentCode}/`,
		},
		{
			label: t("about"),
			link: `/${currentCode}/o-advokatu/`,
		},
		{
			label: t("publications"),
			link: `/${currentCode}/publikacije/`,
		},
		{
			label: t("partners"),
			link: `/${currentCode}/partneri/`,
		},
		{
			label: t("contact"),
			link: `/${currentCode}/kontakt/`,
		},
	]
};
