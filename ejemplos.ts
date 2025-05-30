// Simulate a function that returns a promise
function fetchData(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                // Simulate response data
                resolve({ data: "Here are the data" });
            } else {
                // Simulate an error
                reject(new Error("Invalid URL"));
            }
        }, 1000);
    });
}

// Async function that uses await to handle the promise
async function getData() {
    try {
        const data = await fetchData("https://api.example.com/data");
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
getData();
