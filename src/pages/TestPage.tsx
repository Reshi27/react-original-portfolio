import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

const TestPage: React.FC = () => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: "Default notification",
          message: "Hey there, your code is awesome! 🤥",
        })
      }
    >
      Show notification
    </Button>
  );
};

export default TestPage;
