import { useState } from "react";
import { Pressable, View } from "react-native";
import COLORS from "@constants/COLORS";
import { Dialog, DialogContent, DialogTrigger } from "@nysaUi/dialog";
import { CustomIcon, String, Wrapper, Button } from "@components/nysaUi";
import { FilterPriceModal, CalendarsModal, MapModal } from "@components/modals";
import { Formik } from "formik";
import * as Yup from "yup";
import { formatDate } from "@/utils/time";

const validationSchema = Yup.object().shape({
  date: Yup.object().shape({
    startDate: Yup.string(),
    endDate: Yup.string(),
  }),
});
export default function FilterModal() {
  const [visible, setVisible] = useState(false);
  const [filterPriceisActive, setFilterPriceIsActive] = useState(false);
  const [filterGeoIsActive, setFilterGeoIsActive] = useState(false);
  // get date from filter
  // Deleter date Filter
  const deleteFilterDate = () => {};

  //delete price Filter
  const deleteFilterPrice = () => {};

  // delete  geo Filter
  const deleteFilterGeo = () => {};

  // delete all filter
  const deleteAllFilters = () => {};

  return (
    <Dialog>
      <DialogTrigger setVisible={() => null}>
        <CustomIcon
          variant="filter"
          size="lg"
          onPress={() => setVisible(true)}
          wrapper
        />
      </DialogTrigger>
      <DialogContent
        visible={visible}
        setVisible={setVisible}
        container={false}
      >
        <Wrapper className="bg-main" justifyBetween py>
          <View>
            <View className="flex-row items-center justify-between mb-5">
              <String size="xl">Filtres</String>
              <CustomIcon
                variant="close"
                onPress={() => setVisible(false)}
                wrapper
              />
            </View>
            <Formik
              initialValues={{ date: { startDate: "", endDate: "" } }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log("values", values)}
            >
              {({
                handleSubmit,
                validateForm,
                setTouched,
                dirty,
                isValid,
                setFieldValue,
                values,
              }) => (
                <View className="gap-5">
                  {/* Date filter */}

                  <CalendarsModal
                    setFieldValue={setFieldValue}
                    defaultValues={values.date}
                    type="range"
                  >
                    <View className="flex-row items-center justify-between h-10">
                      <View className="flex-row items-center gap-5">
                        <CustomIcon
                          variant="calendar-days"
                          color={
                            values.date.startDate || values.date.endDate
                              ? COLORS.primaryColor
                              : "#fff"
                          }
                          size="lg"
                        />
                        <View className="flex-row items-center gap-2">
                          <String size="lg">Date</String>
                          <String size="2xs" className="mt-1">
                            {values.date.startDate || values.date.endDate
                              ? `${formatDate(values.date.startDate)} ${
                                  values.date.startDate === values.date.endDate
                                    ? ""
                                    : values.date.endDate
                                    ? " - " + formatDate(values.date.endDate)
                                    : ""
                                }`
                              : ""}
                          </String>
                        </View>
                      </View>
                      {(values.date.startDate || values.date.endDate) && (
                        <CustomIcon
                          variant="close"
                          wrapper
                          onPress={() => {
                            setFieldValue("date.startDate", "");
                            setFieldValue("date.endDate", "");
                          }}
                        />
                      )}
                    </View>
                  </CalendarsModal>
                  {/* --------------------------------------------------- */}
                  {/* Place filter */}
                  <MapModal values={values} location>
                    <View className="flex-row items-center justify-between h-10">
                      <View className="flex-row items-center gap-5">
                        <CustomIcon variant="location" size="lg" />
                        <String size="lg">Lieu</String>
                      </View>
                      {filterGeoIsActive && (
                        <CustomIcon variant="close" wrapper />
                      )}
                    </View>
                  </MapModal>
                  {/* --------------------------------------------------- */}
                  {/* Price filter */}
                  <FilterPriceModal>
                    <View className="flex-row items-center justify-between h-10">
                      <View className="flex-row items-center gap-5">
                        <CustomIcon variant="tag" size="lg" />
                        <String size="lg">Prix</String>
                      </View>
                      {filterPriceisActive && (
                        <CustomIcon variant="close" wrapper />
                      )}
                    </View>
                  </FilterPriceModal>
                  {/* --------------------------------------------------- */}
                  {/* Participants filter */}
                  <View className="flex-row items-center justify-between h-10">
                    <View className="flex-row items-center gap-5">
                      <CustomIcon variant="user-group" size="lg" />
                      <String size="lg">Participants</String>
                    </View>
                    {/* <CustomIcon variant="close" wrapper /> */}
                  </View>
                </View>
              )}
            </Formik>
          </View>

          <View className="flex-row items-center justify-between">
            <Pressable onPress={deleteAllFilters}>
              <String textDecoration="underline">Tout effacer</String>
            </Pressable>
            <Button title="valider" btnClassName="w-44" />
          </View>
        </Wrapper>
      </DialogContent>
    </Dialog>
  );
}
