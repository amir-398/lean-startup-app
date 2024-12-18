import { FlatList, Text, View, RefreshControl } from "react-native";
import EventItem from "./EventItem";
import { FlashList } from "@shopify/flash-list";
import { EventProps } from "@/utils/types";
import { useCallback, useState } from "react";
export default function EventItemList({ events }: { events: EventProps[] }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View className="flex-1">
      <FlashList
        keyExtractor={(item) => item.id.toString()}
        data={events}
        renderItem={({ item }) => <EventItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <String>No events found</String>}
        ListFooterComponent={() => <View className="h-16" />}
        estimatedItemSize={200}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        refreshing={refreshing}
      />
    </View>
  );
}
