import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "../Button";

import TreasureView from "./TreasureView";
import TreasureDescription from "./TreasureDescription";
import CreateTreasureContainer from "./CreateTreasureContainer";
import InnerItemContainer from "./InnerItemContainer";
import ConfirmPopup from "../ConfirmPopup";

//The content of the inventory
let content = [
  {
    text: "Blue gem",
    amount: "1",
    cp: "0",
    sp: "30",
    gp: "0",
    pp: "0",
    description: "A sparkling blue gem",
    id: 0,
  },
  {
    text: "Red gem",
    amount: "5",
    cp: "0",
    sp: "0",
    gp: "25",
    pp: "0",
    description: "A sparkling red gem",
    id: 1,
  },
  {
    text: "Golden gem",
    amount: "1",
    cp: "0",
    sp: "0",
    gp: "0",
    pp: "1",
    description: "A sparkling golden gem",
    id: 2,
  },
];

function TreasureContainer() {
  const [inventory, setInventory] = useState(content);
  const [fullValue, setFullValue] = useState({});
  const [chosenItem, setChosenItem] = useState({});
  const [popups, setPopups] = useState({
    details: false,
    addItem: false,
    removeTreasure: false,
  });

  useEffect(() => {
    setTotalValue(content);
  }, []);

  /**
   *
   * @param {Remove specific item} item The chosen item
   */
  const removeItem = (item) => {
    const newInventory = inventory.filter((i) => i.id !== item.id);
    setInventory(newInventory);
    setTotalValue(newInventory);
  };

  /**
   *
   * @param {Decrease the amount of item} item The chosen item
   */
  const decreaseAmount = (item) => {
    let newInventory = [...inventory];
    for (let i = 0; i < newInventory.length; i++) {
      if (item.id === newInventory[i].id) {
        newInventory[i].amount = Number(newInventory[i].amount) - 1;
      }
    }
    setInventory(newInventory);
    setTotalValue(newInventory);
  };

  /**
   *
   * @param {Add a new item} item The item that is being created
   */
  const addItem = (item) => {
    const newInventory = [...inventory];
    const newItem = {
      text: item.itemName,
      amount: item.amount,
      description: item.itemDescription,

      cp: item.cp,
      sp: item.sp,
      gp: item.gp,
      pp: item.pp,
      id: inventory.length,
    };
    newInventory.push(newItem);
    setInventory(newInventory);
    setTotalValue(newInventory);
    setPopups({ ...popups, addItem: !popups.addItem });
  };

  /**
   *
   * @param {Open/close the popups}
   */
  const popup = (name, item) => {
    if (name == "details") {
      setPopups({ ...popups, details: !popups.details });
    } else if (name == "addItem") {
      setPopups({ ...popups, addItem: !popups.addItem });
    } else if (name == "removeTreasure") {
      setPopups({ ...popups, removeTreasure: !popups.removeTreasure });
    }

    if (item !== undefined) {
      setChosenItem(item);
    }
  };

  /**
   * @param {Sell all of the treasure}
   */
  const sellTreasure = () => {
    let newInventory = [];
    setInventory(newInventory);
    setTotalValue(newInventory);
    setPopups({ ...popups, removeTreasure: !popups.removeTreasure });
  };

  /**
   *
   * @param {Calculate the total value of treasure} array
   */
  const setTotalValue = (array) => {
    let value = {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0,
    };

    let single = {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0,
    };

    for (let i = 0; i < array.length; i++) {
      single.cp = Number(array[i].cp) * Number(array[i].amount);
      value.cp = value.cp + single.cp;

      single.sp = Number(array[i].sp) * Number(array[i].amount);
      value.sp = value.sp + single.sp;

      single.gp = Number(array[i].gp) * Number(array[i].amount);
      value.gp = value.gp + single.gp;

      single.pp = Number(array[i].pp) * Number(array[i].amount);
      value.pp = value.pp + single.pp;
    }

    setFullValue(value);
  };

  return (
    <>
      <View style={styles.container}>
        <TreasureDescription
          content={chosenItem}
          popup={popup}
          show={popups.details}
        />

        <ConfirmPopup
          content={"Are you sure that you want to remove all treasure?"}
          truePopup={sellTreasure}
          falsePopup={popup}
          show={popups.removeTreasure}
        />

        <CreateTreasureContainer
          submitItem={addItem}
          show={popups.addItem}
          popup={popup}
        />

        <InnerItemContainer
          content={inventory}
          popup={popup}
          removeItem={removeItem}
          decreaseAmount={decreaseAmount}
        />
        <TreasureView content={fullValue} />
        <AppButton onPress={() => popup("removeTreasure")}>
          {"Sell Treasure"}
        </AppButton>
        <AppButton onPress={() => popup("addItem")}>{"Add Item"}</AppButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 2.5,
    marginVertical: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    fontSize: 8,
    padding: 5,
    zIndex: 0,
  },
});
export default TreasureContainer;
