export const getLatestLaunches = async () => {
    const rest = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            },
        }),
    });
    const data = await rest.json();
    const { docs: launches } = data;

    return launches;
};

export const getLaunchBy = async ({id}) => {
    const rest = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const launch = await rest.json();

    return launch;
};
