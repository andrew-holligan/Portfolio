function TimelineWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative py-24 after:absolute after:bottom-0 after:left-1/2 after:top-0 after:ml-[-2px] after:w-1 after:bg-border max-md:after:left-0">
      {children}
    </div>
  );
}

export default TimelineWrapper;
