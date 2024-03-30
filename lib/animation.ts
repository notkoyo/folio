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

type SocialsProps = {
  rest?: {
    pathLength?: number;
    opacity?: number;
  };
  animated?: {
    pathLength?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      type?: string;
      ease?: string;
    };
  };
};

export type CursorProps = {
  default?: {
    x?: number;
    y?: number;
  }
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

export const socialsMotion: SocialsProps = {
  rest: {
    pathLength: 0,
    opacity: 0,
  },
  animated: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "tween",
      ease: "easeIn"
    },
  },
};