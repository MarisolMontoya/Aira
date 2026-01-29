const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  diagnostico: async (sintomas, alergias = []) => {
    const res = await fetch("http://localhost:3000/diagnostico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sintomas, alergias })
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error);
    }

    return res.json();
  },

});
