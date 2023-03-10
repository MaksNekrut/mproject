type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		cls,
		...additional.filter(Boolean),
		Object.entries(mods)
			.filter(([_,value]) => !!value)
			.map(([classNames]) => classNames)
	]
		.join(" ")
		.replace(",", " ")
		.trim();
}

classNames("remove-btn", { hovered: true, selectable: true, red: false}, ["pdg"]);