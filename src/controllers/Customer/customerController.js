import createCustomer  from "../../services/Customers/customerService.js";

async function create(request, response) {
    const newCustomerData = request.body;

    try {
        const customer = await createCustomer(newCustomerData);

        response.status(201).json(customer);
    } catch (error) {
        response.status(401).json({ message: "Error in create", error: error.message });
    }
}

export default { create }