export default function toFaNum(input: string) {
    const persianMap = "۰۱۲۳۴۵۶۷۸۹".split("");
    return input.replace(/\d/g, m => persianMap[Number(m)]);
}
