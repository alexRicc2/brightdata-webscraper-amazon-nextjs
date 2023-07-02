import { adminDb } from "@/firebaseAdmin";
import { NextResponse } from "next/server";
import admin from "firebase-admin";
export async function POST(req: Request) {
  try {
    console.log("submitting..");
    const { search } = await req.json();
    console.log("search is: ", search);
    // res.send()
    // return new Response("ok", {status: 200})

    const response = await fetch(
      "https://api.brightdata.com/dca/trigger?collector=c_ljgcufdc1jnlqu302c&queue_next=1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search,
        }),
      }
    );
    const data = await response.json();
    console.log("data");

    const { collection_id, start_eta } = data;
      //TO-DO try to sign  brightdata cheapest plan
    await adminDb.collection("searches").doc(collection_id).set({
      search,
      start_eta,
      status: "pending",
      updatedAt: admin.firestore.Timestamp.now(),
    });
    return NextResponse.json({ collection_id, start_eta });
  } catch (err: any) {
    console.log("error is >>", err);
    return NextResponse.json({ error: err.message });
  }
}

export async function GET(req: Request) {
  return new Response("Hello Alex", { status: 200 });
}
