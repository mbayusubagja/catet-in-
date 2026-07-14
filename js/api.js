// Apps Script
function post(data){
  return fetch(API, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// ===== DOMPET =====

async function getDompet(userId){

    const {data,error}=await supabase
        .from("sumber_dana")
        .select("*")
        .eq("id_user",userId);

    return data;
}

async function tambahDompet(dompet){

    const {error}=await supabase
        .from("sumber_dana")
        .insert(dompet);

    return !error;
}

async function editDompet(data){

    const {error}=await supabase
        .from("sumber_dana")
        .update({

            nama:data.nama,

            tipe:data.tipe

        })
        .eq("id_sumber",data.id_sumber);

    return {

        ok:!error

    };

}

