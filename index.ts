import axios from "axios";
import _ from "lodash";
import dayjs from "dayjs";
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";

async function main() {
  console.log(chalk.green("Starting app..."));

  const id = uuidv4();
  const now = dayjs().format();

  console.log("Generated ID:", id);
  console.log("Current time:", now);

  const arr = [1, 2, 3, 4];
  const doubled = _.map(arr, (x) => x * 2);
  console.log("Doubled:", doubled);

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Fetched data:", res.data);
  } catch (err) {
    console.error("HTTP request failed");
  }
}

main();
