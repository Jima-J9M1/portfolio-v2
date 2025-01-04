
// Email Api
interface sendEmailProps {
    fullname:String,
    email:String,
    phone?:String,
    message:String
}

export async function POST(req:Request){
    console.log(">>>>>>>>>>>>>> send email api >>", process.env.SENDEMAIL_API_KEY);
    const formData = await req.json();
    console.log(">>>>>>>>>>>>>> request >>", formData);
    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.SENDEMAIL_API_KEY}`,
            },
            body: JSON.stringify({
                from: "jimd3730@gmail.com",
                subject: formData.fullname,
                to: "jimadube100@gmail.com",
                text: `
                ${formData.message}
                
                ${formData.email}
                ${formData.phone}
                `,
            }),
            
        });
        
        const responseData = await response.json();
    
    
        return new Response(JSON.stringify({
            message: responseData
        }));
    } catch (err:any) {
        console.log(err);
    
        return new Response(JSON.stringify({
            message: err.message || "Internal Server Error"
        }));
    }
}