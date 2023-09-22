function createRequest(url, passedOptions = {}) {
    const { method, body } = passedOptions;

    const assembledOptions = {
        method: method || "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (body) {
        assembledOptions.body = JSON.stringify(body);
    }

    return new Request(url, assembledOptions);
};


async function sendFetchRequest(url, options) {
    const request = createRequest(url, options);
    let fetchData;

    try {
        const response = await fetch(request);
        const parsedResponseBody = await response.json();

        fetchData = {
            type: "response",
            status: response.status,
            ok: response.ok,
            body: parsedResponseBody,
        };

    } catch (error) {
        fetchData = {
            type: "error",
            status: null,
            ok: null,
            body: {
                message: error.message || "Something went wrong.",
            },
        };
    }

    return fetchData;
};


export default sendFetchRequest;