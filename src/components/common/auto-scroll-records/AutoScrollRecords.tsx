import { RefObject } from "react";
// library
import InfiniteScroll from "react-infinite-scroll-component";
// types
import { ComponentType } from "src/types/common-types";
// styles
import "./AutoScrollRecords.scss";
type AutoScrollRecordsProps = {
  records: any[];
  fetchNextRecords: () => void;
  hasMore: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
  inverse?: boolean;
  loader?: ComponentType;
  emptyRecordPage: ComponentType;
  refs: {
    childRef: RefObject<HTMLDivElement>;
    parentRef?: RefObject<HTMLDivElement>;
  };
};
const AutoScrollRecords = ({
  records,
  fetchNextRecords,
  hasMore,
  children,
  className = "",
  inverse = false,
  loader: Loader,
  emptyRecordPage: EmptyRecordPage,
  refs,
}: AutoScrollRecordsProps): JSX.Element => {
  // empty record logic
  if (records?.length === 0) {
    return <EmptyRecordPage />;
  }

  return (
    <section className={`scroll__container ${className}`} ref={refs.parentRef}>
      <InfiniteScroll
        dataLength={records?.length || 0}
        next={fetchNextRecords}
        hasMore={hasMore}
        loader={Loader ? <Loader /> : <></>}
        scrollThreshold={0.5}
        height={"100%"}
        inverse={inverse}
      >
        <section ref={refs.childRef} className="scroll__element">
          {children}
        </section>
      </InfiniteScroll>
    </section>
  );
};
export { AutoScrollRecords };
