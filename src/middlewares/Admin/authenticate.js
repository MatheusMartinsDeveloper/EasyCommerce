import jwt from "jsonwebtoken";

export default function authenticate(request, response, next) {
    const token = request.headers["Authorization"]?.split("")[1];

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