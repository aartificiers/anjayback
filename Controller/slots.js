import slots from "../Model/slotsModel.js";

export const bookslots = async (req, res) => {

    const { companyname, doe, venue, city, client, clientmobile, toe } = req.body;
    console.log(req.body);

    try {

        const bookslot = new slots({
            companyname, doe, venue, city, client, clientmobile, toe
        });

        const savedslot = await bookslot.save();
        return res.status(200).json({ msg: "Sub Admin Registered Successfully" });

    } catch (error) {

        console.log(error.message);
        return res.status(400).json({ msg: "Registration Failed", error: error });

    }

}

export const getAllSlots=async(req,res)=>{
     try {
        const fetchedSlots= await slots.find();
        return res.status(200).json({data:fetchedSlots});
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg:error});
    }

}

