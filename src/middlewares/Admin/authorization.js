import jwt from "jsonwebtoken";

export default function authorization(request, response, next) {
    const token = request.headers["authorization"]?.split(" ")[1];

    if (!token) {
        response.status(401).json({ message: "Token is required!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            response.status(401).json({ message: "Token is expired!" });
        }

        request.user = decoded;

        next();
    });
}