import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import defaultStyles from "../../config/styles";
import AppButton from "../Button";
import AppText from "../Text";

function CreateTreasureContainer({ submitItem, show, popup }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: "",
      amount: "1",
      itemDescription: "",
      cp: "0",
      sp: "0",
      gp: "0",
      pp: "0",
    },
  });

  return (
    <Modal
      animationType="slide"
      visible={show}
      transparent={true}
      onRequestClose={() => {
        popup("addItem");
      }}
      style={{ borderWidth: 1 }}
    >
      <View style={[defaultStyles.popup, { top: 25, height: 400 }]}>
        <View style={styles.headerContainer}>
          <AppText>Add Item</AppText>
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          shouldUnregister={true}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              numberOfLines={1}
              maxLength={27}
              editable
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="itemName"
        />
        {errors.itemName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            min: 1,
          }}
          shouldUnregister={true}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={"Amount"}
              editable
              keyboardType="numeric"
              maxLength={5}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="amount"
        />

        <View style={[defaultStyles.treasureView, { height: 100 }]}>
          <View
            style={[
              defaultStyles.innerTreasureView,
              { height: 40, marginBottom: 2.5, marginRight: 2.5 },
            ]}
          >
            <Controller
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, onBlur, cp } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={"cp"}
                  editable
                  keyboardType="numeric"
                  maxLength={5}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={cp}
                />
              )}
              name="cp"
            />
          </View>
          <View
            style={[
              defaultStyles.innerTreasureView,
              { height: 40, marginBottom: 2.5, marginLeft: 2.5 },
            ]}
          >
            <Controller
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, onBlur, sp } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={"sp"}
                  editable
                  keyboardType="numeric"
                  maxLength={5}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={sp}
                />
              )}
              name="sp"
            />
          </View>
          <View
            style={[
              defaultStyles.innerTreasureView,
              { height: 40, marginTop: 2.5, marginRight: 2.5 },
            ]}
          >
            <Controller
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, onBlur, gp } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={"gp"}
                  editable
                  keyboardType="numeric"
                  maxLength={5}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={gp}
                />
              )}
              name="gp"
            />
          </View>
          <View
            style={[
              defaultStyles.innerTreasureView,
              { height: 40, marginTop: 2.5, marginLeft: 2.5 },
            ]}
          >
            <Controller
              control={control}
              shouldUnregister={true}
              render={({ field: { onChange, onBlur, pp } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={"pp"}
                  editable
                  keyboardType="numeric"
                  maxLength={5}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={pp}
                />
              )}
              name="pp"
            />
          </View>
        </View>

        <ScrollView style={styles.textContainer}>
          <Controller
            control={control}
            rules={{
              maxLength: 200,
            }}
            shouldUnregister={true}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, { textAlign: "left", padding: 10 }]}
                placeholder="Item Description"
                multiline
                editable
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="itemDescription"
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} onPress={handleSubmit(submitItem)}>
            {"Submit"}
          </AppButton>
          <AppButton style={styles.button} onPress={() => popup("addItem")}>
            {"Cancel"}
          </AppButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "rgba(1, 1, 1, .2)",
    width: "100%",
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: "rgba(1, 1, 1, .2)",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "rgba(1, 1, 1, .4)",
    overflow: "scroll",
    margin: 10,
    marginTop: 0,
  },
});
export default CreateTreasureContainer;
