export const clipboardCopyText = (text: string) => {
    return navigator.clipboard.writeText(text);
}
