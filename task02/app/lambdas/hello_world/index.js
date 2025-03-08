exports.handler = async (event) => {
    console.log("Received event:", event); // For debugging purposes.

    // Extract the path and HTTP method from the event object
    const { rawPath, httpMethod } = event;

    // Case 1: Valid request to /hello with the GET method
    if (rawPath === "/hello" && httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda"
            }),
            headers: {
                "content-type": "application/json"
            },
            isBase64Encoded: false
        };
    }

    // Case 2: Invalid request to any other endpoint or using an unsupported HTTP method
    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${rawPath}. HTTP method: ${httpMethod}`
        }),
        headers: {
            "content-type": "application/json"
        },
        isBase64Encoded: false
    };
};