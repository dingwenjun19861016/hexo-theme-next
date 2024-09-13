const conquestJPObj= {
    server_url : "https://apiv2.furi.info",
    login: async (email, password) => {
        const loginData = await $.post(conquestJPObj.server_url + "/public", { method: 'login', params: [email, password] });
             const { result: user, error } = loginData;
             if(!error) return user;
             if(error) alert("listFuriType: " + JSON.stringify(error));
   },
   upsertFuriType: async (type, description, valid, token) => {
    const responseData = await $.ajax({ 
        url: conquestJPObj.server_url + "/secure",
        type: 'post',
        data: { method: 'upsertFuriType', params: [type, description, valid] },
        headers: {  Token: token  }
      }); 
      if(!responseData.error) return responseData.result;
      else alert("upsertFuriType: " + JSON.stringify(responseData.error));
    },
    listFuriType: async () => {
        const typeData = await $.post(conquestJPObj.server_url + "/public", { method: 'listFuriType' });
         const { result: typeObj, error } = typeData;
         if(!error) return typeObj;
         if(error) alert("listFuriType: " + JSON.stringify(error));
    }
}