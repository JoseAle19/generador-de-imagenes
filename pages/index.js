import {  useState } from "react";
import Axios from "axios";
import styles from "./index.module.css";
const Index = () => {
  const [loading, setLoading] = useState(null);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const postData = async () => {
    setLoading(true);
    const res = await Axios.post("/api/gender", {
      des: description,
    });
    setLoading(false);
    setDescription("");
    setImage(res.data.url);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Generador de imagenes</h1>
      <div className={styles.indexform}>
        <input
          type="text"
          placeholder="Descripcion de la imagen"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className={description.length < 10 ? styles.btnD : styles.btn}
          disabled={description.length < 10 ? true : false}
          onClick={postData}
        >
          Generar
        </button>
        {
          <div className={styles.imageContainer}>
            {loading ? (
              <p>Cargando...</p>
            ) : (
              image && (
                <img
                  className={styles.containerImage}
                  src={image}
                  alt="Imagen a generar"
                />
              )
            )}
        <p className={styles.by}>By: jose alejandro cruz perez</p>
          </div>
        }
      </div>
    </div>
  );
};
export default Index;
