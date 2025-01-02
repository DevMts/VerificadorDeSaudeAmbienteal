export default class WeatherApp {
    constructor() {
        this.longitude = null;
        this.latitude = null;
    }

    getLocalization() {
        try {
            const success = (position) => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
            };
            navigator.geolocation.getCurrentPosition(success);
        } catch (error) {
            console.error("Erro ao obter localização"); // Log de erro (mantido)
        }
    }

    async getQuality() {
        try {
            const response = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${this.latitude}&lon=${this.longitude}&key=885d48e7-09ae-4583-aebf-759f3b8acae4`);
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            const data = await response.json();

            const Dados = {
                "aqi": data.data.current.pollution.aqius,
                "tp": data.data.current.weather.tp,
                "ws": data.data.current.weather.ws,
                "hu": data.data.current.weather.hu,
                "ic": data.data.current.weather.ic
            }

            return Dados;
        } catch (error) {
            console.error('Erro ao buscar qualidade do ar:', error); // Log de erro (mantido)
        }
    }
}