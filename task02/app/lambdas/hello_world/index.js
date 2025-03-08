exports.handler = async (event) => {
    console.log("Request event:", event);

    const { rawPath, httpMethod } = event;

    if (rawPath === "/hello" && httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello, World!"
            }),
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: `Bad Request: ${httpMethod} ${rawPath} is not supported.`,
            }),
        };
    }
};
