import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://rlawnsqja805:mzGU0xMM5ubotsQr@cluster0.petdo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupdsCollection = db.collection("meetups");

    const result = await meetupdsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
