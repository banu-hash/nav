// Campus Navigation System — composition root.
// Wires together all domain mixins. No business logic lives here.
import NavigationMixin "mixins/navigation-api";

actor {
  // Navigation domain — stateless (graph is hard-coded in lib/navigation.mo)
  include NavigationMixin();
};
