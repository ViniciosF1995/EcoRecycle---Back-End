import Connection from "./database.js";
import User from "./models/User.js";
import Lixo from "./models/Lixo.js";
import Condominio from "./models/Condominio.js";

const migrate = async () => {

    try {
        const result = await Connection.sync();
        console.log(result)

    } catch (error) {
        console.error(error)

    }


}

migrate();