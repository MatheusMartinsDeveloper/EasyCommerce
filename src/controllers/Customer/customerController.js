import { createCustomer, getAllCustomer, getCustomer, deleteCustomer, loginCustomer }  from "../../services/Customers/customerService.js";

async function create(request, response) {
    const newCustomerData = request.body;

    try {
        const customer = await createCustomer(newCustomerData);

        response.status(201).json(customer);
    } catch (error) {
        response.status(401).json({ message: "Error in create", error: error.message });
    }
}

async function getAll(request, response) {
    try {
        const customers = await getAllCustomer();

        response.status(201).json(customers);
    } catch (error) {
        response.status(401).json({ message: "Error in get all", error: error.message });
    }
}

async function getOne(request, response) {
    const { id } = request.params;

    if (!id) {
        return response.status(401).json({ message: "Customer not found!" });
    }

    try {
        const customer = await getCustomer(id);

        response.status(201).json(customer);
    } catch (error) {
        response.status(401).json({ message: "Error in get one", error: error.message });
    }
}

async function deleteOne(request, response) {
    const { id } = request.params;

    if (!id) {
        return response.status(401).json({ message: "Customer not found!" });
    }

    try {
        const customer = await deleteCustomer(id);

        response.status(201).json(customer);
    } catch (error) {
        response.status(401).json({ message: "Error in delete one", error: error.message });
    }
}

async function login(request, response) {
    const { email, password } = request.body;

    try {
        const token = await loginCustomer({ email, password });

        response.status(201).json({ message: "Login Success!", token: token });
    } catch (error) {
        response.status(401).json({ message: "Error in login!", error: error.message });
    }
}

export default { create, getAll, getOne, deleteOne, login }