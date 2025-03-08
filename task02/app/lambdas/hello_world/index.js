import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Log event for debugging purposes
    console.log("Event received:", JSON.stringify(event, null, 2));

    const rawPath = event.path || event.rawPath || undefined;
    const httpMethod = event.httpMethod || undefined;

    if (rawPath === "/hello" && httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda",
            }),
            headers: {
                "content-type": "application/json",
            },
            isBase64Encoded: false,
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${rawPath}. HTTP method: ${httpMethod}`,
        }),
        headers: {
            "content-type": "application/json",
        },
        isBase64Encoded: false,
    };
};