type AnimatedProps = {
  rest?: {
    y?: number;
    x?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      type?: string;
      ease?: string;
    };
  };
  hover?: {
    y?: number;
    x?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      type?: string;
      ease?: string;
    };
  };
};

export const textMotion: AnimatedProps = {
  rest: {
    y: 40,
    x: 20,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    y: -15,
    x: 20,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
};

export const techMotion: AnimatedProps = {
  rest: {
    opacity: 0,
    y: -40,
    x: 30,
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    opacity: 1,
    y: 20,
    x: 30,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
};