import org.junit.runner.RunWith;
import org.junit.runners.Suite;

// Import Packages
import com.sierragregg.cci_c1.*;
import com.sierragregg.cci_c2.*;

// Reference: Aggregating tests in suites 
// (https://github.com/junit-team/junit4/wiki/aggregating-tests-in-suites) 
@RunWith(Suite.class)
@Suite.SuiteClasses({
  C1Question1Test.class,
  C1Question2Test.class,
  //C1Question3Test.class,
  C1Question4Test.class,
  C1Question5Test.class,
  C1Question6Test.class,
  C1Question7Test.class,
  C1Question8Test.class,
  C1Question9Test.class,
  C2Question1Test.class,
})

public class AllTests {
  // the class remains empty,
  // used only as a holder for the above annotations
}