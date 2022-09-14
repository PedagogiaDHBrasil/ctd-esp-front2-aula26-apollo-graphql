import { FC, useState } from "react";

const FormularioPokemon: FC = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        <p style={{ paddingRight: 10, width: 100 }}>Nome:</p>
        <input
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          textAlign: "left",
          marginTop: 20,
        }}
      >
        <p style={{ paddingRight: 10, width: 100 }}>Imagem:</p>
        <input
          type={"text"}
          name={"image"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type={"submit"} style={{ width: 200, height: 45, marginTop: 20 }}>
        {" "}
        Apagar
      </button>
    </form>
  );
};

export default FormularioPokemon;
