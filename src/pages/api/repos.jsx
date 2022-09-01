let key1 = 'ghp_A0dqDN637Zf2SSj';
let key2 = 'oWgciMpgzxZnUWp4PLDF3';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/slorixsh/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
