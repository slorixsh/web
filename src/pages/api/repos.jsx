let key1 = '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';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/slorixsh/repos', {
        headers: {
            Authorization: 'token '+key1
        }
    })).json();

    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
