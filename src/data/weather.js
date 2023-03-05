//getting API data for weather

export async function weatherData() {
    const res = await fetch(import.meta.env.VITE_WEATHER_API)
    const data = await res.json()
    console.log(data)  
    return data
}
