export async function getApi(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function newTask(url, task) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(task),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteTask(url) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch (error) {
        console.log(error);
        throw error;

    }
}