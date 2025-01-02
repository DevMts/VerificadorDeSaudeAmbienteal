import WeatherApp from "./clima.js";
import Render from "./render.js";

const app = new WeatherApp();

app.getLocalization();

const dados = async () => {
    const qualityData = await app.getQuality();

    if (qualityData) {
        const render = new Render(qualityData);
        render.renderPage();
    }
};

dados();
