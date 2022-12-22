import React from "react";
import styles from "../components/faq/asset/faq.module.css";
import Add from "../components/faq/asset/add.svg";
import Remove from "../components/faq/asset/remove.svg";
import Questions from "../components/faq/Questions";
import { useState } from "react";

const data = [
  {
    id: 1,
    text: "What is Axe VIP Customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 2,
    text: "How secure are your payment",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 3,
    text: "How to integrate Axe VIP customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 4,
    text: "Axe VIP customer API pricing",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 5,
    text: "What is VIP Customer API?",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  },
  {
    id: 6,
    text: "Security and Privacy",
    p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
  }
];

const FAQ = () => {
  const icon = {
    opened: Remove,
    closed: Add
  };

  // const question_list = data;
  const [question_list, setQuestion_list] = useState(data);

  // const [user_input, setUser_input] = useState("");

  function filter_(input) {
    const query = input.target.value;
    // let newList = [...question_list];
    if (query.length === 0) {
      console.log("ifjhb");
      setQuestion_list(data);
    } else {
      const newList = question_list.filter((item) => {
        return !item.text.includes(query); //// This is returning an error
      });
      setQuestion_list(newList);
    }
  }

  return (
    <div className={styles.faq}>
      <div className={styles.top}>
        <h1>Frequently Asked Question</h1> <h1>FAQ</h1>
        <input type="text" placeholder="Search results" onChange={filter_} />
      </div>
      <div className={styles.main}>
        {question_list.map((item) => (
          <Questions
            key={item.id}
            // user_data={user_input}
            styles={styles}
            text={item.text}
            icon={icon}
            p={item.p}
            alt={"icon"}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
// function onInput(e) {
//   setUser_input(e.target.input);
//   console.log(user_input);
// }

// onChange = { filter_ };
