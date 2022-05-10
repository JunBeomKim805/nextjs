import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing network"
        ></meta>
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;
