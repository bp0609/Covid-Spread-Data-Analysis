import Iframe from "./Iframe";
import Image from "./Image";
import "../styles/BlogStyles.css";
import "../styles/BlogStyles.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Data Science Analysis Blog</h1>
      <h2>General Analysis</h2>
      <p>
        The COVID-19 dataset from Our World in Data provides a comprehensive
        global overview of the pandemic since its beginning in early 2020. The
        dataset covers 7 continents (Asia, Europe, Africa, Oceania, North
        America, South America, and one unnamed/NaN category) and includes data
        from 255 countries and territories worldwide. This extensive coverage
        allows for both global and regional analysis of the pandemic's
        trajectory. The dataset tracks multiple metrics including total cases,
        new cases (with smoothing), and total deaths, providing a multifaceted
        view of how the pandemic evolved over time across different geographical
        regions.
      </p>
      <Iframe path="plots/general_plots/global_covid_trends.html" />

      <h2>Global COVID-19 Trends Over Time</h2>
      <p>
        The time series visualization shows the progression of COVID-19 from
        January 2020 through July 2024 using a logarithmic scale to accommodate
        the wide range of values:
      </p>

      <ul>
        <li>
          <strong>Total Cases (Blue Line):</strong> The cumulative case count
          shows rapid growth in early 2020, followed by a more gradual increase
          that appears to plateau around 700-750 million cases globally by 2024.
          This differs from the 3.2 billion figure mentioned, which appears to
          be an error.
        </li>

        <li>
          <strong>New Cases (Red Line):</strong> This metric reveals multiple
          distinct waves of infection throughout the pandemic. Notable peaks
          occurred in early 2021, early 2022, and a significant spike in early
          2023. After this last major wave, new cases have substantially
          declined to lower levels through 2023-2024.
        </li>

        <li>
          <strong>Total Deaths (Green Line):</strong> The global death toll
          appears to have plateaued at approximately 7-8 million deaths. The
          death curve shows a pattern of rapid increase in 2020 followed by a
          more gradual rise that stabilized in late 2022.
        </li>
      </ul>

      <p>
        The visualization illustrates how the relationship between cases and
        deaths changed over time, likely reflecting improvements in treatment
        protocols, vaccination campaigns, and possibly virus mutations affecting
        virulence.
      </p>

      <Iframe
        path="plots/general_plots/total_cases_sunburst.html"
        height="850px"
      />
      <h2>Continental Distribution of COVID-19 Cases</h2>
      <p>
        The pie chart reveals the uneven global distribution of reported
        COVID-19 cases:
      </p>

      <ul>
        <li>
          <strong>Asia:</strong> Leads with 35.2% of global cases, aligning with
          its position as the world's most populous continent.
        </li>

        <li>
          <strong>Europe:</strong> Accounts for 33.1% of cases, despite having a
          smaller population than Asia, suggesting higher case reporting,
          testing capacity, or actual infection rates.
        </li>

        <li>
          <strong>North America:</strong> Represents 17.8% of global cases, with
          a significant portion likely coming from the United States.
        </li>

        <li>
          <strong>South America:</strong> Contributed 10.3% of total cases,
          reflecting substantial outbreaks in countries like Brazil.
        </li>

        <li>
          <strong>Africa:</strong> Despite being the second-most populous
          continent, Africa accounts for only 2.04% of reported cases, likely
          indicating significant underreporting due to limited testing
          infrastructure rather than a true lower incidence.
        </li>

        <li>
          <strong>Oceania:</strong> Reports the smallest share at 1.62%,
          reflecting both smaller population size and potentially more effective
          containment measures in countries like Australia and New Zealand.
        </li>
      </ul>

      <p>
        This continental distribution highlights how testing capacity, reporting
        systems, population size, and public health responses all influenced the
        recorded impact of COVID-19 across different regions.
      </p>

      <p>
        The actual global burden of COVID-19 is likely higher than these
        reported figures due to limitations in testing capacity, reporting
        mechanisms, and differences in case definitions across countries.
      </p>
      <h2>Analysis by total cases and deaths</h2>
      <Image src="plots/general_plots/top_20_cases_deaths.png" />
      <p>
        The analysis of these plots reveals that{" "}
        <strong>high-income countries</strong> dominate both in total COVID-19
        cases and deaths, largely due to <strong>robust testing</strong> and{" "}
        <strong>reporting infrastructures</strong>. The{" "}
        <strong>United States, European Union</strong>, and other well-resourced
        regions show significantly high numbers, reflecting both extensive
        testing and the challenges of managing large populations. Conversely,
        while some lower-income countries appear lower on these charts, their
        figures might be <strong>underreported</strong> due to limited
        resources. Regions such as <strong>South America</strong> and parts of{" "}
        <strong>Europe</strong> experienced severe impacts, underscoring the
        influence of <strong>socioeconomic factors</strong> and{" "}
        <strong>healthcare capacity</strong> on pandemic outcomes.
      </p>
      <h2>Analysis by Vaccination Rate</h2>
      <Image src="plots/general_plots/top_20_vaccinated.png" />
      <ul>
        <li>
          Both plots reveal that populous nations like <strong>China</strong>{" "}
          and <strong>India</strong> lead in COVID-19 vaccination efforts, with
          China topping both charts for people vaccinated and fully vaccinated.{" "}
          <strong>Lower-middle-income countries</strong> also contribute
          significantly, reflecting robust global initiatives and international
          support, while high-income regions such as North America and the
          European Union demonstrate strong vaccination numbers due to advanced
          healthcare systems.
        </li>

        <li>
          The differences between the two plots highlight challenges in
          completing vaccination schedules, including issues like{" "}
          <strong>vaccine hesitancy</strong> and{" "}
          <strong>logistical constraints</strong>. Although many regions have
          achieved high numbers for at least one dose, ensuring full vaccination
          remains critical for maximum protection and reflects ongoing efforts
          to address disparities in vaccine access and distribution.
        </li>
      </ul>
      <Image src="plots/general_plots/top_20_deaths_per_population.png" />
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 1</h1>
          <h3>
            Countries with longer life expectancies, higher human development
            indexes, and lower smoking rates among both men and women will
            experience lower COVID-19 case fatality ratios and better overall
            outcomes.
          </h3>
        </div>
        <p>
          The reasoning behind this hypothesis is that{" "}
          <strong>higher life expectancy</strong> and <strong>HDI</strong>{" "}
          generally indicate robust <strong>healthcare infrastructures</strong>,
          effective <strong>public health policies</strong>, and{" "}
          <strong>healthier lifestyle</strong> practices. In contrast, lower
          smoking rates reduce respiratory vulnerabilities, making populations
          more resilient to severe COVID-19 impacts. Together, these factors are
          expected to contribute to a reduced case fatality ratio.
        </p>
        <h4>
          <strong>Procedure</strong>
        </h4>
        <ul>
          <li>
            To test this hypothesis, we first ensured that key variables—such as
            life expectancy, HDI, and smoking prevalence—had no missing values
            by replacing any missing entries with zeros. We then calculated the
            case fatality ratio (CFR) by dividing total deaths by total cases.
            After grouping the data by country and filtering out rows with zero
            values for critical metrics, we created scatter plots with
            regression lines to visually inspect the relationships between CFR
            and each variable (life expectancy, HDI, female smokers, and male
            smokers).
          </li>
          <li>
            <p>
              The Case Fatality Ratio (CFR) is calculated as:<br></br>
              <em>CFR = Total Deaths / Total Cases</em>
              <br></br>
              This gives a proportion, which can be multiplied by 100 to express
              it as a percentage if desired.
            </p>
          </li>
        </ul>
        <h4>
          <strong>Results</strong>
        </h4>
        <ol>
          <Image src="plots/H1/cfr_vs_smokers.png" />
          <li>
            <strong>Scatter Plot analysis</strong>:- The scatter plots show a
            clear negative trend between CFR and both life expectancy and HDI,
            confirming that countries with better health and socio-economic
            conditions tend to have lower fatality ratios. In contrast, the
            plots for smoking prevalence (both male and female) reveal only a
            weak negative association, suggesting that while smoking may impact
            respiratory health, it is less influential on CFR compared to
            overall healthcare quality and development. These findings
            underscore the importance of strong healthcare systems and
            socio-economic development in mitigating the fatal impacts of
            COVID-19.
          </li>
          <Image src="plots/H1/correlation_matrix.png" />
          <li>
            <strong>Correlation Matrix Analysis:</strong>
            <ul>
              <li>
                The correlation between <strong>life_expectancy</strong> and{" "}
                <strong>case_fatality_ratio</strong> is <strong>-0.300</strong>,
                which confirms that countries with longer life expectancies
                experience lower fatality ratios.
              </li>
              <li>
                The correlation between <strong>human_development_index</strong>{" "}
                and <strong>case_fatality_ratio</strong> is{" "}
                <strong>-0.369</strong>, further highlighting that higher HDI is
                associated with improved COVID-19 outcomes.
              </li>
              <li>
                Smoking prevalence shows weaker correlations with CFR:{" "}
                <strong>-0.143</strong> for female smokers and{" "}
                <strong>-0.047</strong> for male smokers. This suggests that
                while lower smoking rates can have a positive impact on public
                health, they are comparatively less significant in influencing
                CFR than the indicators of overall healthcare quality and
                development.
              </li>
              <li>
                Additionally, the strong positive correlation (
                <strong>0.911</strong>) between <strong>life_expectancy</strong>{" "}
                and <strong>human_development_index</strong> emphasizes that
                countries with better overall socio-economic conditions tend to
                have superior healthcare systems and lower fatality rates during
                the pandemic.
              </li>
            </ul>
          </li>
        </ol>

        <h5>
          <strong>Conclusion</strong>
        </h5>
        <p>
          The findings support the hypothesis that countries with longer life
          expectancies and higher human development indexes experience lower
          COVID-19 case fatality ratios, indicative of better overall outcomes.
          Although lower smoking rates are expected to contribute to improved
          health, their effect on CFR is relatively weaker. This analysis
          underlines the critical importance of robust healthcare infrastructure
          and socio-economic development in mitigating the fatal impacts of
          COVID-19.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 2</h1>
          <h3>
            Countries with higher cardiovascular death rates and greater
            diabetes prevalence will experience worse COVID-19 outcomes, meaning
            they will have higher case fatality ratios.
          </h3>
        </div>
        <p>
          This hypothesis is based on the understanding that both{" "}
          <strong>cardiovascular diseases</strong> and <strong>diabetes</strong>{" "}
          are major risk factors for severe COVID-19 complications. In countries
          where these comorbidities are more common, the overall population may
          be more vulnerable to the virus. Consequently, when a larger
          proportion of the population suffers from these conditions, the
          likelihood of severe outcomes—including{" "}
          <strong>higher mortality</strong> rates—rises, resulting in a{" "}
          <strong>higher case fatality ratio (CFR)</strong>.
        </p>

        <p>The CFR is calculated using the formula:</p>

        <p>
          <em>CFR = Total Deaths / Total Cases</em>
        </p>

        <p>
          This ratio provides an estimate of the severity of the disease by
          comparing the number of deaths to the number of confirmed cases.
        </p>
        <h4>
          <strong>Procedure</strong>
        </h4>
        <ul>
          <li>
            To test this hypothesis, we first ensured that key variables—such as
            cardiovascular death rates and diabetes prevalence—had no missing
            values by replacing any missing entries with zeros. We then
            calculated the case fatality ratio (CFR) by dividing total deaths by
            total cases. After grouping the data by country and filtering out
            rows with zero values for critical metrics, we created scatter plots
            with regression lines to visually inspect the relationships between
            CFR and each variable (cardiovascular deaths and diabetes
            prevalence).
          </li>
        </ul>
        <h4>
          <strong>Results</strong>
        </h4>
        <ol>
          <Image src="plots/H2/cardiovascular_diabetes_vs_cfr.png" />
          <li>
            <strong>Cardiovascular Death Rate vs. Case Fatality Ratio</strong>:-
            The scatter plot for cardiovascular death rate against CFR reveals a{" "}
            <strong>positive correlation</strong> (coefficient ≈ 0.245). This
            suggests that countries with{" "}
            <strong>higher cardiovascular death rates</strong> tend to have
            slightly <strong>higher CFRs</strong>. The regression line indicates
            a modest upward trend, supporting the hypothesis that a higher
            burden of cardiovascular conditions can lead to worse COVID-19
            outcomes, though it is clear that other factors also influence
            fatality rates.
          </li>

          <li>
            <strong>Diabetes Prevalence vs. Case Fatality Ratio</strong>:- In
            contrast, the scatter plot for diabetes prevalence versus CFR shows
            a very <strong>weak negative</strong> correlation (coefficient ≈
            -0.097). The regression line indicates a slight downward trend,
            which <strong>contradicts the initial expectation</strong> that
            higher diabetes prevalence would correlate with higher CFRs. This
            unexpected result might be due to confounding factors like{" "}
            <strong>underreporting</strong> or{" "}
            <strong>variations in healthcare quality</strong> across countries.
          </li>
          <Iframe path="plots/H2/cardiovascular_diabetes_vs_cfr_interactive.html" />
          <li>
            <strong>Scatter Plot Analysis</strong>:- The scatter plot combines
            both cardiovascular death rate and diabetes prevalence to examine
            their joint effect on CFR. Here, bubble size and color intensity
            (representing CFR) suggest that while countries with higher
            cardiovascular death rates tend to exhibit higher CFRs, the impact
            of diabetes prevalence on CFR is not as pronounced. This
            visualization reinforces the notion that cardiovascular conditions
            have a more discernible relationship with COVID-19 fatality rates
            than diabetes prevalence in this dataset.
          </li>
        </ol>

        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          Overall, the analysis partially supports the hypothesis. The data
          indicates that higher cardiovascular death rates are associated with
          increased COVID-19 case fatality ratios, aligning with expectations
          about the role of cardiovascular conditions in exacerbating COVID-19
          outcomes. However, the anticipated relationship between diabetes
          prevalence and higher fatality rates is not observed; instead, the
          correlation is weak and slightly negative. These findings suggest that
          while certain comorbidities like cardiovascular diseases contribute to
          higher COVID-19 fatality rates, the influence of diabetes may be
          overshadowed by other factors, such as differences in healthcare
          access, reporting practices, and overall pandemic management
          strategies.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 3</h1>
          <h3>
            In countries with limited COVID-19 testing and weaker healthcare
            systems, the actual number of pandemic-related deaths is likely much
            higher than officially reported. This discrepancy is evident when
            excess mortality significantly surpasses the reported COVID-19 death
            counts.
          </h3>
        </div>
        <p>
          In regions with <strong>constrained healthcare infrastructure</strong>{" "}
          and <strong>insufficient testing</strong> capabilities, many COVID-19
          cases and deaths may go <strong>undiagnosed</strong> and{" "}
          <strong>unreported</strong>. Factors contributing to this
          underreporting include:
        </p>

        <ul>
          <li>
            <strong>Limited Testing Capacity:</strong> Without widespread
            testing, many infections remain undetected, leading to undercounted
            cases and deaths.
          </li>
          <li>
            <strong>Overburdened Healthcare Systems:</strong> Healthcare
            facilities overwhelmed by patient loads may not accurately record
            all COVID-19-related fatalities.
          </li>
          <li>
            <strong>Inadequate Death Registration Systems:</strong> Some
            countries lack robust systems for recording and classifying deaths,
            resulting in incomplete data.
          </li>
        </ul>

        <p>
          <strong>Excess mortality</strong> serves as a more comprehensive
          metric, capturing both <strong>direct and indirect deaths</strong>{" "}
          related to the pandemic, including those not officially attributed to
          COVID-19. Studies have highlighted significant underestimations in
          official COVID-19 death statistics, particularly in countries with
          limited testing and healthcare resources.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>
        <p>
          To investigate whether countries with lower testing rates and weaker
          healthcare infrastructures have significantly higher excess mortality
          compared to reported COVID-19 deaths—suggesting underreporting—we
          conducted a comprehensive analysis. We utilized a dataset containing
          information on total deaths, excess mortality, testing rates, and
          hospital bed availability per country. By calculating the
          underreporting ratio (excess mortality divided by reported deaths) and
          normalizing the data for comparability, we created a scatter plot
          visualization. This chart plots testing rates against hospital bed
          availability, with bubble size and color indicating the underreporting
          ratio.
        </p>
        <h4>
          <strong>Results</strong>
        </h4>
        <ol>
          <Iframe path="plots/H3/testing_hospital_beds_underreporting.html" />
          <li>
            <strong>Scatter Plot Analysis:-</strong> The visualization reveals
            that countries with <strong>lower testing</strong> rates and{" "}
            <strong>fewer hospital beds</strong> tend to have{" "}
            <strong>larger, darker-colored bubbles</strong>, indicating{" "}
            <strong>higher underreporting</strong> ratios. Conversely, countries
            like{" "}
            <strong>
              Japan, South Korea, Russia, Slovakia, Denmark, UAE, and Australia
            </strong>
            , which have higher testing rates and more robust healthcare
            infrastructures, exhibit{" "}
            <strong>smaller, lighter-colored bubbles</strong>, suggesting{" "}
            <strong>lower underreporting</strong>. These findings support the
            hypothesis that limited testing and weaker healthcare systems
            contribute to the underestimation of the true COVID-19 death toll.
          </li>
        </ol>

        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          The analysis confirms that in countries with constrained healthcare
          infrastructure and limited testing capabilities, the actual COVID-19
          death toll is substantially higher than officially reported figures.
          The scatter plot reveals that nations with lower testing rates and
          fewer hospital beds display significantly higher underreporting
          ratios—reflected by larger and darker bubbles—indicating a marked
          discrepancy between excess mortality and recorded COVID-19 deaths. In
          contrast, countries with robust testing and healthcare systems show
          lower underreporting, underscoring the importance of sufficient
          testing and healthcare resources in accurately capturing the
          pandemic's impact. These findings highlight the urgent need for
          enhanced testing strategies and improvements in healthcare
          infrastructure to better address and mitigate the true consequences of
          COVID-19.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 4</h1>
          <h3>
            Countries that invest in robust healthcare infrastructure—reflected
            by higher hospital beds per thousand—tend to experience lower rates
            of hospitalization and ICU admissions relative to the number of new
            COVID-19 cases
          </h3>
        </div>
        <p>A strong healthcare infrastructure can enable:</p>

        <ul>
          <li>
            <strong>Early and effective intervention:</strong> Better-equipped
            hospitals allow for prompt treatment, which can prevent cases from
            escalating to severe levels.
          </li>
          <li>
            <strong>Improved outpatient care:</strong> Sufficient hospital
            capacity often goes hand-in-hand with robust outpatient services
            that manage cases before hospitalization becomes necessary.
          </li>
          <li>
            <strong>Efficient resource allocation:</strong> More hospital beds
            per capita generally indicate more comprehensive healthcare systems,
            which can quickly adapt to surges in cases and prevent overload.
          </li>
        </ul>

        <p>
          These factors contribute to reducing both the hospitalization and ICU
          rates, supporting the idea that countries with more hospital beds per
          thousand are better prepared to manage patient loads during a health
          crisis.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>
        <p>
          We grouped the dataset by country—selecting the most recent record for
          each—to ensure current representation, and defined two key metrics:
        </p>

        <ol>
          <li>
            <code>
              Hospitalization rate = hospitalizations per million / new cases
              smoothed per million
            </code>
            .
          </li>
          <li>
            <code>
              ICU rate = icu admissions per million / new cases smoothed per
              million
            </code>
            .
          </li>
        </ol>

        <p>
          These formulas normalize the number of hospitalizations and ICU
          admissions by new case counts, enabling fair cross-country comparisons
          and serving as indicators of healthcare response, where lower rates
          suggest a more effective system in managing COVID-19 without
          overwhelming hospital resources.
        </p>
        <h3>Results</h3>
        <ol>
          <Image src="plots/H4/hospital_beds_vs_rates.png" />
          <li>
            <strong>
              <em>Scatter plots:-</em>
            </strong>
            <ul>
              <li>
                <strong>Better Healthcare Infrastructure:</strong> Countries
                like Austria, France, Bulgaria, Switzerland, and Belgium—with
                higher numbers of hospital beds per thousand—tend to have lower
                hospitalization and ICU rates. This suggests that their
                healthcare systems may be better equipped to manage COVID-19
                cases early on, preventing progression to severe illness.
              </li>
              <li>
                <strong>Contrasting Cases:</strong> In contrast, Canada, despite
                being a developed nation, shows higher hospitalization and ICU
                rates. This may be attributed to having fewer hospital beds per
                thousand, which could indicate a relatively weaker capacity to
                handle surges in severe cases. Countries like Bolivia and
                Argentina also demonstrate high rates in both hospitalization
                and ICU metrics, reinforcing the hypothesis that limited
                healthcare resources can exacerbate the severity of outbreaks.
              </li>
            </ul>
          </li>
          <Image src="plots/H4/correlation_matrix_healthcare_metrics.png" />
          <li>
            <strong>
              <em>Correlation Analysis:</em>
            </strong>
            <ul>
              <li>
                <strong>
                  Hospital Beds per Thousand vs. Hospitalization Rate:
                </strong>{" "}
                The correlation is -0.40, indicating a moderate negative
                relationship where an increase in hospital beds is associated
                with a decrease in hospitalization rates.
              </li>
              <li>
                <strong>Hospital Beds per Thousand vs. ICU Rate:</strong> The
                correlation is -0.26, suggesting a weak to moderate negative
                relationship, implying that more hospital beds per thousand may
                help reduce ICU admissions relative to new cases.
              </li>
            </ul>
          </li>
        </ol>

        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          The analysis supports the hypothesis that countries with robust
          healthcare infrastructure—indicated by a higher number of hospital
          beds per thousand—tend to experience lower hospitalization and ICU
          rates relative to new COVID-19 cases. The scatter plots reveal a clear
          trend where nations with better healthcare resources manage to keep
          hospitalization and ICU rates lower, suggesting effective early
          intervention and resource allocation. Conversely, countries with fewer
          hospital beds face higher hospitalization and ICU rates, indicating a
          strain on their healthcare systems. This underscores the critical role
          of healthcare infrastructure in managing public health crises like
          COVID-19.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 5</h1>
          <h3>
            Regions with higher population density tend to experience a faster
            and wider spread of COVID-19. This is reflected in the higher
            average rate of new COVID-19 cases per million inhabitants.
          </h3>
        </div>
        <p>
          In densely populated regions, people are more likely to be in{" "}
          <strong>close proximity</strong> to one another, which facilitates the{" "}
          <strong>transmission of contagious diseases</strong> such as COVID-19.
          The increased rate of interaction and contact raises the{" "}
          <strong>probability of virus spread</strong>, leading to higher
          numbers of new cases per million in these areas.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>
        <p>
          The analysis started by reading a comprehensive COVID-19 dataset
          containing <code>'population_density'</code> and{" "}
          <code>'new_cases_per_million'</code> among other variables. After
          cleaning the data by removing rows with missing or zero values and
          eliminating extreme outliers (cap values at the 99th percentile), the
          data was aggregated per country. Average new cases per million were
          computed and countries were grouped into density groups using{" "}
          <code>pd.qcut</code>, merging the lower two quartiles (Low and
          Mid-Low) into a single "Low-Mid" group. The Pearson ANOVA F-test was
          then applied, using the F-statistic formula:
        </p>

        <pre>
          <code>F = Between-group variance / Within-group variance</code>
        </pre>

        <p>
          This statistical test was used to check if the differences in average
          new case rates between the density groups are significant.
        </p>
        <Image src="plots/H5/boxplot_density_cases.png" />
        <h4>Boxplot:</h4>
        <p>
          The bar plot (or boxplot) indicates that as the population density
          increases from the "Low-Mid" group to the "Mid-High" group, and
          finally to the "High" density group, the average number of new
          COVID-19 cases per million also increases. Approximate mean values
          observed:
        </p>

        <ul>
          <li>
            <strong>Low-Mid:</strong> Around 50 new cases per million
          </li>
          <li>
            <strong>Mid-High:</strong> Around 100 new cases per million
          </li>
          <li>
            <strong>High:</strong> Around 150 new cases per million
          </li>
        </ul>

        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          The analysis supports the hypothesis that regions with{" "}
          <strong>higher population density</strong> experience a{" "}
          <strong>faster and wider spread</strong> of COVID-19, as reflected by
          increased new case rates per million. Both the statistical test
          (ANOVA) and the visual analysis of the boxplot show{" "}
          <strong>significant differences across density groups</strong>,
          reinforcing the view that public health strategies should consider
          population density as a key factor in managing and preventing epidemic
          spread.
        </p>
      </div>
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 6</h1>
          <h3>
            Countries that have a higher overall median age or a larger
            proportion of individuals aged 65 and older tend to have higher
            rates of COVID-19 deaths per million inhabitants.
          </h3>
        </div>
        <p>
          Older populations are generally more <strong>vulnerable</strong> to
          severe outcomes when infected with COVID-19 because aging is often
          accompanied by <strong>weakened immune</strong> responses and a{" "}
          <strong>higher likelihood of pre-existing health conditions</strong>.
          As a result, countries with higher median ages or a greater percentage
          of citizens over 65 can be expected to show elevated death rates
          during the pandemic. This expectation is supported by epidemiological
          evidence indicating that age is a major risk factor for COVID-19
          mortality.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>

        <p>
          The analysis began by importing a comprehensive COVID-19 dataset
          containing various metrics, including the median age of each country’s
          population, the percentage of the population aged 65 and older, and
          total deaths per million. The steps were:
        </p>

        <ul>
          <li>
            <strong>Aggregation:</strong>
            <br />
            For each country, the data was grouped to retain the first
            observation for <code>median_age</code> and{" "}
            <code>aged_65_older</code> while taking the maximum value of{" "}
            <code>total_deaths_per_million</code>, ensuring the latest and most
            representative data per country was used.
          </li>

          <li>
            <strong>Correlation Analysis:</strong>
            <br />
            The Pearson correlation coefficient was computed using the formula:
            <br />
            <code>
              r = Cov(X, Y) / (σ<sub>X</sub> · σ<sub>Y</sub>)
            </code>
            <br />
            where <code>Cov(X, Y)</code> is the covariance between the predictor
            (median age or percentage aged 65+) and the response (COVID-19
            deaths per million). Along with the correlation coefficients,
            p-values were obtained to assess the significance of these
            relationships.
          </li>

          <li>
            <strong>Visualization:</strong>
            <br />
            Regression plots were generated using seaborn’s <code>
              regplot
            </code>{" "}
            to visualize the relationship between the predictors (median age and
            % aged 65+) and the outcome (deaths per million).
          </li>
        </ul>
        <Image src="plots/H6/deaths_vs_age.png" />
        <h4>
          <strong>Regression Plot Analysis</strong>
        </h4>

        <ul>
          <li>
            <strong>Deaths per Million vs. Median Age:</strong> The regression
            plot indicates a clear positive trend. As the median age increases
            from approximately 20 to 50 years, the associated COVID-19 deaths
            per million show a substantial rise—from around 200 to roughly 5000.
            This suggests that countries with older median ages experience
            dramatically higher death rates.
          </li>

          <li>
            <strong>Deaths per Million vs. Percentage Aged 65+:</strong>{" "}
            Similarly, the scatter plot with the regression line shows that as
            the percentage of the population aged 65 and above increases, the
            COVID-19 death rate per million also increases. This visual pattern
            confirms the expectation that a higher proportion of elderly
            citizens is linked to greater vulnerability to COVID-19 fatalities.
          </li>
        </ul>

        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          The analysis supports the hypothesis that countries with a higher
          overall median age or a larger proportion of individuals aged 65 and
          older tend to experience higher rates of COVID-19 deaths per million
          inhabitants. Both the correlation coefficients and regression plots
          indicate strong positive relationships between these demographic
          factors and COVID-19 mortality rates. This underscores the importance
          of considering age demographics in public health strategies and
          resource allocation during pandemics, as older populations are at
          significantly greater risk for severe outcomes.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 7</h1>
          <h3>
            Countries with greater healthcare resources, particularly more
            hospital beds per capita, tend to have lower COVID-19 mortality
            rates.
          </h3>
        </div>
        <p>
          The availability of hospital beds is a critical component of
          healthcare infrastructure. During the COVID-19 pandemic, sufficient
          hospital bed capacity allowed for timely treatment of patients,
          reducing the likelihood of severe outcomes and deaths. Conversely,
          limited bed availability can lead to overwhelmed healthcare systems,
          delayed care, and increased mortality.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>

        <p>
          The methodology for analyzing the relationship between healthcare
          infrastructure and COVID-19 mortality rates involved several key
          steps:
        </p>

        <ul>
          <li>
            <strong>Metric Computation:</strong>
            <br />
            <code>
              Deaths per Case Percentage = (Cumulative Deaths per Million /
              Cumulative Cases per Million) × 100
            </code>
            <br />
            This metric provides insight into the severity and fatality of the
            disease within each country.
          </li>

          <li>
            <strong>Grouping by Healthcare Capacity:</strong>
            <br />
            Countries were categorized into three groups—Low, Medium, and
            High—based on <code>hospital_beds_per_thousand</code> using
            quantile-based discretization. This stratification allowed for
            comparative analysis across different levels of healthcare
            infrastructure.
          </li>

          <li>
            <strong>Temporal Analysis:</strong>
            <br />
            <Iframe path="plots/H7/cumulative_deaths_per_case_hospital_beds.html" />
            The average <code>deaths_per_case_pct</code> was computed for each
            group over time, starting from June 8, 2020. To minimize daily
            fluctuations and observe broader trends, the data was downsampled to
            every 10th day.
          </li>
        </ul>

        <h4>
          <strong>Temporal Analysis</strong>
        </h4>

        <p>
          The temporal analysis of the average deaths per case percentage across
          the three groups reveals distinct trends:
        </p>

        <ul>
          <li>
            <strong>Low Bed Capacity Group:</strong> Maintained a higher{" "}
            <code>deaths_per_case_pct</code>, ranging between 4% and 2.5% over
            time.
          </li>
          <li>
            <strong>Medium Bed Capacity Group:</strong> Observed a moderate{" "}
            <code>deaths_per_case_pct</code>, fluctuating between 3% and 1.5%.
          </li>
          <li>
            <strong>High Bed Capacity Group:</strong> Consistently exhibited the
            lowest <code>deaths_per_case_pct</code>, decreasing from 2.5% to
            0.75%.
          </li>
        </ul>

        <h4>
          <strong>Conclusion</strong>
        </h4>

        <p>
          The analysis supports the hypothesis that countries with greater
          healthcare resources, particularly more hospital beds per capita, tend
          to have lower COVID-19 mortality rates. The temporal trends indicate
          that as healthcare capacity increases, the deaths per case percentage
          decreases, highlighting the critical role of healthcare infrastructure
          in managing public health crises. This underscores the importance of
          investing in healthcare resources to improve outcomes during pandemics
          and other health emergencies.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 8</h1>
          <h3>
            Countries that are more developed—those with higher Human
            Development Index (HDI) and longer life expectancy—are more likely
            to have higher COVID-19 vaccination percentages compared to
            developing countries.
          </h3>
        </div>
        <p>This is because:</p>

        <ul>
          <li>
            <strong>Healthcare Infrastructure:</strong> Developed countries
            generally have better healthcare systems, enabling more efficient
            vaccine distribution and administration.
          </li>
          <li>
            <strong>Public Trust and Awareness:</strong> Higher education and
            awareness levels in developed countries often correlate with higher
            vaccine acceptance.
          </li>
          <li>
            <strong>Financial Capacity:</strong> Wealthier nations can afford
            large-scale vaccine procurement and logistics more easily than
            developing nations.
          </li>
          <li>
            <strong>International Priority:</strong> Developed nations were
            among the first to secure vaccine supplies when global production
            was limited.
          </li>
        </ul>

        <h4>
          <strong>Procedure</strong>
        </h4>

        <ul>
          <li>
            <strong>Calculate Vaccination Percentage:</strong> For each record,
            compute the percentage of people vaccinated by dividing the number
            of vaccinated individuals by the total population and multiplying by
            100.
          </li>
          <li>
            <strong>Select Most Recent Data:</strong> For each country, keep
            only the most recent available data point to ensure comparability.
          </li>
          <li>
            <strong>Filter Out Incomplete Records:</strong> Remove countries
            that don’t have data for any of the key metrics: vaccination
            percentage, HDI, or life expectancy.
          </li>
          <li>
            <strong>Remove Outliers:</strong> Discard entries where the
            vaccination percentage exceeds 100%, which could result from data
            inconsistencies.
          </li>
        </ul>

        <h4>
          <strong>Scatter Plot Analysis</strong>
        </h4>
        <Iframe path="plots/H8/vaccination_hdi_life_expectancy.html" />
        <p>
          The dynamic scatter plot visualizes the relationship between HDI
          (x-axis), vaccination percentage (y-axis), and life expectancy (bubble
          size). The trend shows a strong positive correlation—countries with
          high HDI and life expectancy tend to cluster in the upper right corner
          with large bubbles, indicating higher vaccination rates. Examples
          include{" "}
          <strong>Norway, Switzerland, Austria, Hong Kong, and Japan</strong>,
          which demonstrate <strong>high values</strong> across all metrics. In
          contrast, developing countries like those in{" "}
          <strong>Sub-Saharan Africa</strong> (e.g.,{" "}
          <strong>Niger, South Sudan, Nigeria</strong>) show significantly lower
          HDI, life expectancy, and vaccination coverage.
        </p>

        <h4>
          <strong>Conclusion</strong>
        </h4>

        <p>
          The data strongly supports the hypothesis. The dynamic scatter plot
          demonstrates a positive correlation between a country’s development
          indicators (HDI and life expectancy) and its vaccination percentage.
          Countries like <strong>Norway, Switzerland, Japan,</strong> and{" "}
          <strong>Hong Kong</strong>—known for high HDI and long life
          expectancy—exhibit high vaccination rates. In contrast, countries with
          lower HDI and life expectancy, such as{" "}
          <strong>South Sudan, Niger,</strong> and <strong>Nigeria</strong>,
          have significantly lower vaccination coverage. This suggests that
          development status plays a crucial role in a country's capacity to
          manage mass vaccination during a global health crisis.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 9</h1>
          <h3>
            Countries with higher booster vaccination coverage (measured as
            total_boosters_per_hundred) are expected to have lower
            hospitalization and ICU admission rates relative to new COVID-19
            cases.
          </h3>
        </div>
        <p>
          Booster doses help sustain and enhance immunity over time, reducing
          the severity of COVID-19 infections. This maintained immunity should
          lead to fewer severe cases that require hospitalization or intensive
          care, ultimately lowering the rates of hospital and ICU admissions
          relative to the number of new cases.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>

        <p>
          The analysis involves first calculating two key ratios: the
          hospitalization rate, defined as the number of hospitalized patients
          per million divided by new cases (smoothed per million), and the ICU
          rate, defined as the number of ICU patients per million divided by new
          cases (smoothed per million). Next, these ratios are compared across
          countries against their booster vaccination coverage (
          <code>total_boosters_per_hundred</code>) using regression plots and
          correlation analysis.
        </p>

        <h4>
          <strong>Regression Plot Analysis</strong>
        </h4>
        <Image src="plots/H9/boosters_vs_rates.png" />
        <ul>
          <li>
            Both regression plots show a positive relationship between booster
            vaccination coverage and the derived rates.
          </li>
          <li>
            The correlation between boosters and the hospitalization rate is{" "}
            <strong>0.19</strong>, while the correlation between boosters and
            the ICU rate is <strong>0.03</strong>.
          </li>
        </ul>

        <p>
          These results indicate that, contrary to the initial expectation, the
          data shows a slight positive association rather than the expected
          negative association.
        </p>

        <h4>
          <strong>Conclusion</strong>
        </h4>

        <p>
          Although the hypothesis predicted that higher booster coverage would
          correlate with lower hospitalization and ICU rates, the analysis
          reveals a weak positive relationship. This suggests that other factors
          might be influencing the severity outcomes, or that the effect of
          booster coverage on reducing severe cases may be more complex than
          anticipated. Further investigation and additional variables might be
          necessary to fully understand the relationship between booster
          vaccinations and severe COVID-19 outcomes.
        </p>
      </div>
      <hr />
      <div className="card">
        <div className="hypothesis">
          <h1>Hypothesis 10</h1>
          <h3>
            Higher vaccination coverage at the continent level is expected to be
            associated with lower COVID-19 reproduction rates over time. This
            means that as more people get vaccinated, the virus should spread
            less rapidly.
          </h3>
        </div>
        <p>
          Vaccines are designed to reduce both the severity of infections and
          the likelihood of virus transmission. As vaccination coverage
          increases, more individuals develop immunity, leading to fewer
          opportunities for the virus to spread. However, occasional increases
          in reproduction rates may indicate the emergence of new, more
          transmissible variants that temporarily overcome vaccine-induced
          immunity.
        </p>

        <h4>
          <strong>Procedure</strong>
        </h4>

        <p>
          First, the dataset was filtered to include key variables such as{" "}
          <code>total_vaccinations_per_hundred</code> and{" "}
          <code>reproduction_rate</code>, along with continent information. The
          data was then aggregated by continent and date to compute the average
          vaccination coverage and reproduction rate for each region. An
          animated scatter plot was created where each continent is represented
          as a “balloon” that moves over time. The x-axis shows the average
          vaccination coverage, the y-axis shows the average reproduction rate,
          and the balloon size is proportional to the reproduction rate.
        </p>

        <h4>
          <strong>Scatter Plot Analysis</strong>
        </h4>
        <Iframe path="plots/H10/vaccination_reproduction_rate.html" />
        <ul>
          <li>
            The animated scatter plot shows that, as time passes, the sizes of
            the continent balloons generally decrease, indicating a drop in
            reproduction rates as vaccination coverage improves.
          </li>
          <li>
            However, there are instances where the balloon size increases, which
            could suggest the appearance of new COVID-19 variants that
            temporarily raise the reproduction rate despite high vaccination
            coverage.
          </li>
        </ul>

        <h4>
          <strong>Conclusion</strong>
        </h4>

        <p>
          The analysis supports the notion that increased vaccination coverage
          correlates with a reduction in COVID-19 transmission at the continent
          level. While the overall trend shows a decrease in reproduction rates
          over time, occasional spikes in balloon size highlight the potential
          impact of emerging variants, emphasizing the need for continued
          vigilance and possible vaccine updates.
        </p>
      </div>
      <hr />
      <div className="references">
        <h2>References</h2>
        <ol>
          <li>
            <strong>OWID COVID-19 Codebook.</strong>
            <br />
            Available from GitHub:
            <a
              href="https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-codebook.csv"
              target="_blank"
            >
              https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-codebook.csv
            </a>
          </li>
          <li>
            <strong>OWID COVID-19 Data (Old Version).</strong>
            <br />
            Available from GitHub:
            <a
              href="https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data-old.csv"
              target="_blank"
            >
              https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data-old.csv
            </a>
          </li>
          <li>
            <strong>OWID COVID-19 Data.</strong>
            <br />
            Available from GitHub:
            <a
              href="https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data.csv"
              target="_blank"
            >
              https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data.csv
            </a>
          </li>
          <li>
            <strong>Impact of COVID-19.</strong>
            <br />
            Kaggle Notebook by Zabihullah18:
            <a
              href="https://www.kaggle.com/code/zabihullah18/impact-of-covid-19/notebook"
              target="_blank"
            >
              https://www.kaggle.com/code/zabihullah18/impact-of-covid-19/notebook
            </a>
          </li>
          <li>
            <strong>EDA on COVID19 India Data.</strong>
            <br />
            Kaggle Notebook by Saibhargav2810:
            <a
              href="https://www.kaggle.com/code/saibhargav2810/eda-on-covid19-india-data/notebook"
              target="_blank"
            >
              https://www.kaggle.com/code/saibhargav2810/eda-on-covid19-india-data/notebook
            </a>
          </li>
        </ol>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
