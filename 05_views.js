// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome!',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to the mental rotation experiment.
            <br />
            <br />
            In this experiment I examine the difference in reaction times
             when classifying same objects but with different rotation angles.
            <br />
            The experiment will only take you about 5 minutes to complete.
            <br />
            Thank your for participating!`,
  buttonText: 'Start the experiment'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions',
  text: `I will now explain how you have to proceed in the task.
            <br />
            <br />
            You will be provided with two objects
             which are the same except for their orientation.
             Your task is it to classify these figures as "same" or "different".
            <br />
            You should strive for maximal speed as well as accuracy in giving your answers.`,
  buttonText: 'Let\'s get started!'
});

// A wrapping view that tells the participant that the main trials will start.
const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main',
  title: 'Alright, now it is getting serious!',
  text: `Nice work in the practice trials! We will now proceed with the main trials.`,
  buttonText: 'I am so excited (and I just can\'t hide it)!'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: `Answering the following questions is optional, but your answers will help me analyze the results.`

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});


/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// The key press view for the practive trials.
const practice = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `key_press`, you can use a smaller value (for testing), but not a larger value
  trials: practice_trials.key_press.length,
  // name should be identical to the variable name
  name: 'practice',
  data: _.shuffle(practice_trials.key_press),
  pause: 250,
  /*
  hook: {
    after_response_enabled: check_response,
    after_stim_shown: time_limit
  }
  */
});

// The key press view for the main trials.
const main = magpieViews.view_generator("key_press", {
  trials: main_trials.key_press.length,
  name: 'main',
  question: 'Are these two figures the same except for their orientation?',
  data: _.shuffle(main_trials.key_press),
  pause: 250,
  /*
  hook: {
    after_stim_shown: time_limit
  }
  */
});
