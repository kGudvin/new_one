import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitivesDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparkLineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function Ecommerce() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl"> $63,487.98 </p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size="md"
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button type="button"
              style={{color: item.iconColor, backgroundColor:item.iconBg}}> {item.icon}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
