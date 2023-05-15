import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const paramas = useParams();

  const conversationId = useMemo(() => {
    if (!paramas?.conversationId) {
      return "";
    }

    return paramas.conversationId as string;
  }, [paramas?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

export default useConversation;
