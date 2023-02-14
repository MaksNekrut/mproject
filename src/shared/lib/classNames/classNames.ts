type Mods = Record<string, boolean | string>
const obj: Mods = {
    'hovered': true
}
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([classNames,value]) => !!value)
            .map(([classNames,value]) => classNames)
    ]
        .join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: false}, ['pdg'])