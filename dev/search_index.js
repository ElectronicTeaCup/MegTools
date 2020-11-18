var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions-1","page":"DocStrings","title":"Functions","text":"","category":"section"},{"location":"functions/#","page":"DocStrings","title":"DocStrings","text":"Modules = [MegTools]\nOrder = [:function]","category":"page"},{"location":"functions/#MegTools.average_across_trials-Tuple{Any}","page":"DocStrings","title":"MegTools.average_across_trials","text":"average_across_trials(all_epochs)\n\nReturns the averaged signal across trials of a single condition (e.g. Sub09[\"1\"] ).\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.average_across_trials-Tuple{Dict}","page":"DocStrings","title":"MegTools.average_across_trials","text":"average_across_trials(all_epochs::Dict)\n\nReturns the averaged signal across trials of a subject (Dict with multiple conditions)).\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.baseline_correction-Tuple{Any}","page":"DocStrings","title":"MegTools.baseline_correction","text":"baseline_correction(data; baseline_range=(-200,0), output_baseline=false)\n\nBaseline correct data (single subject—single channel or multiple channels) based on the  specified range (default is -200 ≤ t ≤ 0)\n\nReturns baseline corrected data (single channel or multiple channels) and if output_baseline is set to true then it also returns the individual baseline\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.baseline_correction-Tuple{Dict,Any}","page":"DocStrings","title":"MegTools.baseline_correction","text":"baseline_correction(data::Dict; baseline_range=(-200,0))\n\nBaseline correct data (single subject with one or more conditions) based on the input baseline  values for each channel. This is usually an averaged computed baseline from many conditions. For example, by using the get_averaged_baseline function\n\nReturns baseline corrected data (single channel or multiple channels)\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.baseline_correction-Tuple{Dict}","page":"DocStrings","title":"MegTools.baseline_correction","text":"baseline_correction(data::Dict; baseline_range=(-200,0), output_baseline=false)\n\nData contains all conditions and is a Dict (subject). Baseline correct data (single channel or multiple channels) based on the specified range (default is -200 ≤ t ≤ 0)\n\nReturns baseline corrected data (single channel or multiple channels) of all conditions and if output_baseline is set to true then it also returns the individual baselines\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.collect_mean_amps-Tuple{Dict}","page":"DocStrings","title":"MegTools.collect_mean_amps","text":"collect_mean_amps(peaks::Dict, cond_trigger_vals=load_trigger_values(\"regsoi\"))\n\nCollects the mean amplitudes of the left and right ERF of all conditions present in the subject (Dict) input. It also converts soi triggers to values of the sois; as assigned by the load_trigger_values(experimental_paradigm) function. By default it loads the regsoi trigger values.\n\nReturns in the following format: soi, left_mean_amps, right_mean_amps\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.collect_peaks-Tuple{Dict}","page":"DocStrings","title":"MegTools.collect_peaks","text":"collect_peaks(peaks::Dict, cond_trigger_vals=load_trigger_values(\"regsoi\"))\n\nCollects the peaks (the maximum value and their latencies) of the left and right ERF of all conditions present in the subject (Dict) input. It also converts soi triggers to values of the sois; as assigned by the load_trigger_values(experimental_paradigm) function. By default it loads the regsoi trigger values.\n\nReturns in the following format: soi, left_amps, left_lats, right_amps, right_lats\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.find_mean_amplitude-Tuple{Any,Any,Any}","page":"DocStrings","title":"MegTools.find_mean_amplitude","text":"find_mean_amplitude(data, left_hem_channels, right_hem_channels, mean_range=(50,150))\n\nFinds the channels containing peak values (for left and right hemisphere data sets) in (ideally averaged) data. Channels of interest are passed into lefthemchannels and righthemchannels as Symbols. The latency window for evaluating the peak values can be set with mean_range (default is set to 50 ≤ t ≤150)\n\nReturns the left and right mean amplitudes, peak erfs and their respective channel labels   in the following format:  left_peak_erf, left_peak_value, left_peak_latency, right_peak_erf, right_peak_value,      right_peak_latency, peak_channel_left, peak_channel_right\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.find_mean_amplitude-Tuple{Dict,Any,Any}","page":"DocStrings","title":"MegTools.find_mean_amplitude","text":"find_mean_amplitude(data::Dict, left_hem_channels, right_hem_channels, mean_range=(50,150))\n\nData contains all conditions and is a Dict (subject). Finds the channels containing peak values (for left and right hemisphere data sets) in (ideally averaged) data. Channels of interest are passed into lefthemchannels and righthemchannels as Symbols. The latency window for evaluating the peak values can be set with mean_range (default is set to 50 ≤ t ≤150)\n\nReturns the left and right peak erfs and their respective channel labels as a Dict with the following entires: [\"left_peak_erf\"],[\"left_peak_value\"], [\"left_peak_latency\"],  [\"right_peak_erf\"], [\"right_peak_value\"], [\"left_channel_label\"], [\"right_peak_latency\"], [\"right_channel_label\"]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.find_peaks","page":"DocStrings","title":"MegTools.find_peaks","text":"find_peaks(data, left_hem_channels, right_hem_channels, peak_range=(50,150))\n\nFinds the channels containing peak values (for left and right hemisphere data sets) in (ideally averaged) data. Channels of interest are passed into lefthemchannels and righthemchannels as Symbols. The latency window for evaluating the peak values can be set with peak_range (default is set to 50 ≤ t ≤150)\n\nReturns the left and right peak erfs and their respective channel labels in the following format: left_peak_erf, left_peak_value, left_peak_latency, right_peak_erf, right_peak_value,              right_peak_latency, peak_channel_left, peak_channel_right\n\n\n\n\n\n","category":"function"},{"location":"functions/#MegTools.find_peaks-Tuple{Dict,Any,Any}","page":"DocStrings","title":"MegTools.find_peaks","text":"find_peaks(data::Dict, left_hem_channels, right_hem_channels, peak_range=(50,150))\n\nData contains all conditions and is a Dict (subject). Finds the channels containing peak values (for left and right hemisphere data sets) in (ideally averaged) data. Channels of interest are passed into lefthemchannels and righthemchannels as Symbols. The latency window for evaluating the peak values can be set with peak_range (default is set to 50 ≤ t ≤150)\n\nReturns the left and right peak erfs and their respective channel labels as a Dict with the following entires: [\"left_peak_erf\"],[\"left_peak_value\"], [\"left_peak_latency\"],  [\"right_peak_erf\"], [\"right_peak_value\"], [\"left_channel_label\"], [\"right_peak_latency\"], [\"right_channel_label\"]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.get_averaged_baseline-Tuple{Dict,Any}","page":"DocStrings","title":"MegTools.get_averaged_baseline","text":"baseline_correction(data::Dict; baseline_range=(-200,0))\n\nBaseline correction based on data from specified conditions.Data contains all conditions  and is a Dict (subject). Baseline correct data (single channel or multiple channels) based  on the specified range (default is -200 ≤ t ≤ 0)\n\nReturns \n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.highlow_butterworth_filter-Tuple{Any,Any}","page":"DocStrings","title":"MegTools.highlow_butterworth_filter","text":"highlow_butterworth_filter(data,sampling_rate; low_pass=30, high_pass=1, bw_n_pole=5, offset=true)\n\nApplies a high and low-pass filter of butterworth design (n pole 5). For altering the threshold values for filters, change add keyword arguments lowpass for low pass filter cut-off (default=30) and highpass for high-pass cut-off (default=1). To change the nth order of the butterworth filter, use keyword bwnpole (default=5). Offset due to filtering at 0z, i.e the mean of the time series, can be turned off by setting offset=false which manually adds back the offset\n\nReturns filtered data\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.highlow_butterworth_filter-Tuple{Dict,Any}","page":"DocStrings","title":"MegTools.highlow_butterworth_filter","text":"highlow_butterworth_filter(data::Dict, sampling_rate; low_pass=30, high_pass=1, bw_n_pole=5)\n\nData contains all conditions and is a Dict (subject). Applies a high and low-pass filter of butterworth design (n pole 5). For altering the threshold values for filters, change add keyword arguments lowpass for low pass filter cut-off (default=30) and highpass for high-pass cut-off (default=1). To change the nth order of the butterworth filter, use keyword bwnpole (default=5).\n\nReturns filtered data as a Dict\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.load_BSepochs-Tuple{String}","page":"DocStrings","title":"MegTools.load_BSepochs","text":"load_BSepochs(subject_path::String)\n\nReads epoch data (trials) from the outputs generated by Brainstorm and bundles them together. The general output of Brainstorm consists of .mat data files for each different epoch (trialnumber), in each different condition (datacondition_label). An example file name is data_15_trial045.mat. The output is a Dict type with labels for each condition, with data being present as KeyedArrays.\n\nFor more information on Brainstorm: Tadel F, Baillet S, Mosher JC, Pantazis D, Leahy RM (2011). Brainstorm: A User-Friendly Application for MEG/EEG Analysis Computational Intelligence and Neuroscience, vol. 2011, ID 879716. Website: https://neuroimage.usc.edu/brainstorm/\n\nExamples\n\njulia> load_BSepochs(\"reg_soi_ext1_ya10_sss\")\nDict{Any,Any} with 19 entries:\n  \"4\"  => [showing 3 of 100 slices]…\n  \"1\"  => [showing 3 of 100 slices]…\n  \"12\" => [showing 3 of 100 slices]…\n  \"2\"  => [showing 3 of 100 slices]…\n  ⋮    => ⋮\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.load_besa_av-Tuple{Any}","page":"DocStrings","title":"MegTools.load_besa_av","text":"load_besa_av(file_name)\n\nProduces a dictionary of arrays (using AxisKeys and NamedDims), based on the input .mat file of a single average. The input .mat file is produced from the BESA®-MATLAB® interface and then saved as a separate .mat file containing the average of a single condition.\n\nEach array has the following format: [time(ms), channels]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.load_cont_epochs-Tuple{Any}","page":"DocStrings","title":"MegTools.load_cont_epochs","text":"load_cont_epochs(file_name)\n\nProduces a dictionary of arrays (using AxisKeys and NamedDims), based on the different conditions classified from the input .mat file. The input .mat file is produced from the BESA®-MATLAB® interface when the \"Epochs around triggers\" option is selected.\n\nEach array has the following format: [time(ms), channels, trials]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.select_channels-Tuple{Any}","page":"DocStrings","title":"MegTools.select_channels","text":"select_channels(data; paradigm)\n\nSelect specific channels of interest to be processed for analysis. It selects channel names based on the available paradigms and returns data from channels, as well as the labels of the channels. The default paradigm is set to auditoryN1m. For custom selection use the paradigm custom_channels and input the channels as positional arguments as arrays of strings, or as a single channel string e.g.\n\naveragefilteredauditory, auditoryleft, auditoryright = selectchannels(     average,     paradigm=\"customchannels\",     leftchannels=[\"MEG0241\", \"MEG0231\"],     rightchannels=[\"MEG2641\",] )\n\nReturns in the following format: selected_data, left_hem_channels, right_hem_channels\n\n\n\n\n\n","category":"method"},{"location":"functions/#MegTools.select_channels-Tuple{Dict}","page":"DocStrings","title":"MegTools.select_channels","text":"select_channels(data::Dict; paradigm)\n\nData contains all conditions and is a Dict (subject). Select specific channels of interest to be processed for analysis. It selects channel names based on the available paradigms and returns data from channels, as well as the labels of the channels. The default paradigm is set to auditoryN1m.\n\nReturns in the following format: selected_data, left_hem_channels, right_hem_channels\n\n\n\n\n\n","category":"method"},{"location":"pipelines/testingpreproc/#Simple-pipeline-1","page":"Simple Pipeline","title":"Simple pipeline","text":"","category":"section"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Loading a single condition from subject where epoch data was extracted via BESA®. In This example we use some more plausible data than the test data","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"using Plots\ngr()\nusing Measures\nusing MegTools\ntest = load_cont_epochs(\"condEpoch.mat\")","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Dict{Any,Any} with 4 entries:\n  \"4\" => [showing 3 of 100 slices]…\n  \"1\" => [showing 3 of 100 slices]…\n  \"2\" => [showing 3 of 100 slices]…\n  \"3\" => [showing 3 of 100 slices]…","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"The data from condition \"2\" (defined in BESA®) is averaged across all the trials","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"test_average = average_across_trials(test[\"2\"])","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"2-dimensional KeyedArray(NamedDimsArray(...)) with keys:\n↓   time ∈ 1501-element Vector{Float64}\n→   channels ∈ 319-element Vector{Symbol}\nAnd data, 1501×319 Array{Float64,2}:\n           (:MEG0112)  (:MEG0113)  …  (:IAS_Y)   (:IAS_z)   (:SYS201)\n (-500.0)   2.56249    21.5772        -0.655651  -0.417233   0.0     \n (-499.0)   3.12303    19.4094        -0.691414  -0.405312   0.0     \n (-498.0)   2.1424     13.8768        -0.679493  -0.321865   0.0     \n (-497.0)   1.7165     13.7295        -0.679493  -0.286102   0.0     \n (-496.0)   2.72797    15.3495     …  -0.715256  -0.309944   0.0     \n (-495.0)   1.81067    19.3068        -0.667572  -0.286102   0.0     \n      ⋮                            ⋱                                 \n  (994.0)   2.70243    -1.72295       -0.667572  -0.429153   0.0     \n  (995.0)  -0.983829   -0.0452927     -0.691414  -0.38147    0.0     \n  (996.0)  -4.31213     1.7537     …  -0.691414  -0.405312   0.0     \n  (997.0)  -4.86396     3.63506       -0.64373   -0.405312   0.0     \n  (998.0)  -3.68522     4.85062       -0.667572  -0.452995   0.0     \n  (999.0)  -5.28816     5.96115       -0.619888  -0.405312   0.0     \n (1000.0)  -4.48724     4.85557       -0.64373   -0.429153   0.0","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"We select data that we're interested in: in this case the pre-defined auditoryN1m channels and take a look at the averaged waveforms from the selected channels.","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"test_average_auditory,auditory_left,auditory_right = select_channels(\n    test_average,\n    paradigm=\"auditoryN1m\",\n)\n\nplot(test_average_auditory, legend=false, size=(1000,500))","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Applying filters to smoothen out the waveform","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"filtered = highlow_butterworth_filter(test_average_auditory, 1000)\nplot(\n    test[\"2\"].time,\n    filtered(channels=:MEG1621),\n    label=\"Filtered\", size=(1000,500),\n    linewidth=3,\n    color=:royalblue,\n);\nplot!(\n    test[\"2\"].time,\n    test_average_auditory(channels=:MEG1621),\n    label=\"Raw\",\n    color=:lightblue,\n    )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Follow up with baseline correction of the data","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"baseline_corrected = baseline_correction(filtered)\nplot(\n  test[\"2\"].time,\n  filtered(channels=:MEG1621),\n  label=\"Only Filtered\",\n  size=(1000,500),\n  linewidth=3,\n  color=:royalblue,\n);\nplot!(\n    test[\"2\"].time,\n    baseline_corrected(channels=:MEG1621),\n    label=\"Baseline Corrected\",\n    size=(1000,500),\n    linewidth=3,\n    color=:crimson,\n  )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"And finally finding peaks in both left and right sets of channels","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"a,_,b,_,c,d = find_peaks(baseline_corrected, auditory_left, auditory_right)\n\n# Takinga look at all the channels with marked peak values\nchannel_plots = plot(layout=(9,3), size = (1000,3000), margin=5mm, legend=false, ticks=[])\nfor channel = 1:26\n    plot!(\n        channel_plots,\n        test_average_auditory[:,channel],\n        color=:lightblue,\n        subplot=channel,\n        label = \"Raw Signal\")\n    plot!(\n        channel_plots,\n        filtered[:,channel],\n        subplot=channel,\n        width=2,\n        color=:royalblue,\n        label = \"filtered Signal\",\n    )\n    plot!(\n        channel_plots,\n        baseline_corrected[:,channel],\n        subplot=channel,\n        color=:crimson,\n        width=2, label=\"Baseline corrected\",\n    )\n    if test_average_auditory.channels[channel] == c\n        plot!(\n        reverse(findmax(baseline_corrected[:,channel])),\n        seriestype=:scatter,\n        subplot=channel,\n        color=:green,\n        label=\"Peak left hem\", markersize=8,\n    )\n    elseif test_average_auditory.channels[channel] == d\n        plot!(\n            reverse(findmin(baseline_corrected[:,channel])),\n            seriestype=:scatter,\n            subplot=channel,\n            color=:red,\n            label=\"Peak right hem\",\n            markersize=8\n        )\n    end\n\nend\n\n\nchannel_plots","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"pipelines/testingpreproc/#Pipeline-with-single-subject-(all-conditions)-1","page":"Simple Pipeline","title":"Pipeline with single subject (all conditions)","text":"","category":"section"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Loading the data we need. This time an entire subject is selected, rather than a single condition.","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"using Plots\ngr()\nusing Measures\nusing MegTools\ntest = load_cont_epochs(\"condEpoch.mat\")\n\ntest_average = average_across_trials(test)","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Dict{Any,Any} with 4 entries:\n  \"4\" => [-10.4638 -2.82368 … -0.345707 0.0; -10.8853 -4.47701 … -0.441074\n0.0;…\n  \"1\" => [-5.28188 -6.96084 … -0.345707 0.0; -3.12151 -9.73671 … -0.393391\n0.0;…\n  \"2\" => [2.56249 21.5772 … -0.417233 0.0; 3.12303 19.4094 … -0.405312 0.0;\n … ;…\n  \"3\" => [-8.77625 -1.33373 … -0.357628 0.0; -6.94149 -3.89193 … -0.369549\n0.0;…","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Getting the averages of all conditions","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"test_average_auditory,auditory_left,auditory_right = select_channels(\n    test_average,\n    paradigm=\"auditoryN1m\",\n)\n\navs = plot(layout=(4,1), size=(1000,1000))\nfor (cond,val) in test_average_auditory\n    plot!(avs, test_average_auditory[cond], legend=false)\nend\n\navs","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Filtering and baseline correcting","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"filtered = highlow_butterworth_filter(test_average_auditory, 1000)\nbaseline_corrected = baseline_correction(filtered)\n\npeaks = find_peaks(baseline_corrected, auditory_left, auditory_right)","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Dict{Any,Any} with 4 entries:\n  \"4\" => Dict{Any,Any}(\"right_channel_label\"=>:MEG2221,\"left_peak_value\"=>2\n49.1…\n  \"1\" => Dict{Any,Any}(\"right_channel_label\"=>:MEG2611,\"left_peak_value\"=>9\n1.75…\n  \"2\" => Dict{Any,Any}(\"right_channel_label\"=>:MEG2221,\"left_peak_value\"=>1\n67.5…\n  \"3\" => Dict{Any,Any}(\"right_channel_label\"=>:MEG2221,\"left_peak_value\"=>2\n22.7…","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Loading trigger values from labels","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"cond_trigger_vals = load_trigger_values(\"regsoi\")","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Dict{String,Any} with 20 entries:\n  \"4\"  => 0.5\n  \"1\"  => 1.0\n  \"12\" => 1.4\n  \"20\" => \"Noise\"\n  \"2\"  => 0.3\n  \"6\"  => 0.7\n  \"11\" => 1.3\n  \"13\" => 1.5\n  \"5\"  => 0.6\n  \"15\" => 1.7\n  \"16\" => 1.8\n  \"14\" => 1.6\n  \"7\"  => 0.8\n  \"8\"  => 0.9\n  \"17\" => 1.9\n  \"10\" => 1.2\n  \"19\" => 1.001\n  \"9\"  => 1.1\n  \"18\" => 2.0\n  \"3\"  => 0.4","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"For this specific analysis I need the peaks from all averaged and preprocecced ERFS","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"soi, left_amps, right_amps = collect_peaks(peaks)","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Any[0.3, 0.4, 0.5, 1.0], Any[167.54163255378427, 222.76169962748236, 249.1\n7313020699214, 91.75092170883264], Any[164.4568309644351, 227.3254603109246\n3, 244.7908937654169, 120.45757339145912])","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"Plotting peaks that we got","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"scatter(soi,left_amps, label=\"Left peak amplitudes\");\nscatter!(soi,right_amps, label=\"Right peak amplitudes\")","category":"page"},{"location":"pipelines/testingpreproc/#","page":"Simple Pipeline","title":"Simple Pipeline","text":"(Image: )","category":"page"},{"location":"#MegTools.jl-1","page":"Home","title":"MegTools.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"}]
}
